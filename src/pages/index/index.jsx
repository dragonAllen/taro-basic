import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text, Navigator } from '@tarojs/components'
import { connect } from '@tarojs/redux'
import { add, minus, asyncAdd } from '../../actions/counter'

import { Barcode, QRCode } from 'taro-code'

import './index.scss'


@connect(({ counter }) => ({
  counter
}), (dispatch) => ({
  add () {
    dispatch(add())
  },
  dec () {
    dispatch(minus())
  },
  asyncAdd () {
    dispatch(asyncAdd())
  }
}))
class Index extends Component {

    config = {
    navigationBarTitleText: '首页'
  }

  componentWillReceiveProps (nextProps) {
    console.log(this.props, nextProps)
  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='index'>
        <Button className='add_btn' onClick={this.props.add}>+</Button>
        <Button className='dec_btn' onClick={this.props.dec}>-</Button>
        <Button className='dec_btn' onClick={this.props.asyncAdd}>async</Button>
        <View><Text>{this.props.counter.num}</Text></View>
        <Barcode text='hello' width={305} height={68} />
        <QRCode text='world' size={130} />
        <navigator url='/pages/echart/echart' className='nav'>点击跳转图表案例</navigator>
        <navigator url='/pages/wxparse/wxparse' className='nav'>点击跳转富文本解析案例</navigator>
      </View>
    )
  }
}

export default Index
