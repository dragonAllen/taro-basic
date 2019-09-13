import Taro, { Component } from '@tarojs/taro'
import { View } from "@tarojs/components"
import "./wxparse.scss"
import WxParse from '../../components/wxParse/wxParse'

class Wxparse extends Component {

  constructor(props) {
    super(props)
    this.state = {}
  }

  componentDidMount() {
    const article = '<div style="color: red">我是HTML代码</div><img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1568354093849&di=02930e5ca3bf3cfce677df74d808b92d&imgtype=0&src=http%3A%2F%2Fe.hiphotos.baidu.com%2Fimage%2Fpic%2Fitem%2F4610b912c8fcc3cef70d70409845d688d53f20f7.jpg">'
    WxParse.wxParse('article', 'html', article, this.$scope, 5)
  }

  componentWillReceiveProps (nextProps) {
    console.log(this.props, nextProps)
  }

  componentWillUnmount () { }

  config = {
    navigationBarTitleText: '富文本解析示例'
  }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View>
        <import src='../../components/wxParse/wxParse.wxml' />
        <template is='wxParse' data='{{wxParseData:article.nodes}}'/>
      </View>
    )
  }
}

export default Wxparse
