import React, { Component } from 'react'
import Spinner from '../spinner'
import ErrorIndicator from '../error-indicator'

export const withData = (View) => {
  return class extends Component {
    state = {
      data: null,
      loading: true,
      error: false
    }

    update = () => {
      this.setState({
        loading: true,
        error: false
      });

      this.props.getData()
        .then(data => this.setState({
          data,
          loading: false })
        )
        .catch(() => this.setState({
          error: true,
          loading: false
        }))
    }

    componentDidMount() {
      this.update()
    }
    
    render() {
      const { data, loading, error } = this.state

      return  loading ? <Spinner/> :
              error   ? <ErrorIndicator /> : <View {...this.props} data={data} />
    }

  }
}