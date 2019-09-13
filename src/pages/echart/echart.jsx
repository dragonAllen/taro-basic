import Taro, { Component } from '@tarojs/taro'
import { View } from "@tarojs/components"
import FunnelChart from "../../components/echart/FunnelChart"
import "./echart.scss"

class Echart extends Component {

  constructor(props) {
    super(props)
    this.state = {}
  }

  componentDidMount() {
    const chartData =[
      {value: 60, name: '访问'},
      {value: 40, name: '咨询'},
      {value: 20, name: '订单'},
      {value: 80, name: '点击'},
      {value: 100, name: '展现'}]
    this.funnelChart.refresh(chartData);
  }

  componentWillReceiveProps (nextProps) {
    console.log(this.props, nextProps)
  }

  componentWillUnmount () { }

  config = {
    navigationBarTitleText: '漏斗图示例'
  }

  componentDidShow () { }

  componentDidHide () { }

  refFunnelChart = (node) => this.funnelChart = node

  render () {
    return (
      <View className='funnel-chart'>
        <FunnelChart ref={this.refFunnelChart} />
      </View>
    )
  }
}

export default Echart
