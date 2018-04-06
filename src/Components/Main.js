import React, { Component } from 'react';
import Card from './Card';

const initState = {
  data: [],
  options: {
    canLoad: true,
    page: 1,
    isRequested: false,
  }
};

class Main extends Component {
  constructor(props) {
    super(props);
    this.url = 'https://rickandmortyapi.com/api/character';
    this.state = { ...initState };
    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
    this.fetchData();
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll() {
    const height = window.innerHeight + window.scrollY;
    const trigger = document.body.offsetHeight - 500;
    const { isRequested, canLoad } = this.state.options;
    if ((height >= trigger) && (!isRequested && canLoad)) {
      this.setState({
        options: {
          ...this.state.options,
          isRequested: true,
        },
      });
      this.fetchData();
    }
  };

  async fetchData() {
    try {
      const res = await fetch(`${this.url}?page=${this.state.options.page}`);
      const { results, info } = await res.json();
      this.setState({
        data: [...this.state.data, ...results],
        options: {
          ...this.state.options,
          canLoad: !!info.next,
          isRequested: false,
          page: this.state.options.page + 1,
        },
      });
    } catch (err) {
      console.error('Fetch Error', err);
    }
  }

  render() {
    return (
      <main className="cards--section">
        {this.state.data.map(Card)}
      </main>
    );
  }
}

export default Main;