import TaroRegionPicker from '../../components/regionPicker/index'
import { Barcode, QRCode } from 'taro-code'
import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text, Navigator } from '@tarojs/components'
import { connect } from '@tarojs/redux'
import { getMockData } from '../../utils/api';
import { add, minus, asyncAdd } from '../../actions/counter'


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

  constructor(props) {
    super(props);
    this.state = {
      myMockData: ''
    };
  }

  componentWillReceiveProps (nextProps) {
    console.log(this.props, nextProps)
  }

  componentWillUnmount () { }

  componentDidMount() {
    this.mockData();
  }

  componentDidShow () { }

  componentDidHide () { }

  onGetRegion (region) {
    // 参数region为选择的省市区
    console.log(region);
  }

  mockData = () => {
    let that = this;
    getMockData()
      .then(res => {
          that.setState({
            myMockData: '成功获取数据:'+ res.data.name + res.data.result || []
          });
      })
      .catch(err => {
        console.error(`请求接口失败:`, err);
      });
  };

  render () {
    return (
      <View className='index'>
        <Button className='add_btn' onClick={this.props.add}>+</Button>
        <Button className='dec_btn' onClick={this.props.dec}>-</Button>
        <Button className='dec_btn' onClick={this.props.asyncAdd}>async</Button>
        <View><Text>{this.props.counter.num}</Text></View>
        <View>获取数据测试======{this.state.myMockData}</View>
        <Navigator url='/pages/echart/echart' className='nav'>点击跳转图表案例</Navigator>
        <Navigator url='/pages/wxparse/wxparse' className='nav'>点击跳转wxParse案例</Navigator>
        <Navigator url='/pages/richtext_markdown/richtext' className='nav'>点击跳转taro_rich_text案例</Navigator>
        <TaroRegionPicker onGetRegion={this.onGetRegion.bind(this)} />
        <Barcode text='hello' width={750} height={100} />
        <QRCode text='world' size={130} />
      </View>
    )
  }
}

export default Index
