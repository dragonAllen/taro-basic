import {TaroRichTextNoWxParse} from 'taro_rich_text'
import Taro, { Component } from '@tarojs/taro'
import { View } from "@tarojs/components"
import "./richtext.scss"

class Richtext extends Component {

  constructor(props) {
    super(props)
    this.state = {
      richText: '> ### 列表示例\n- 星期一\n  - 摸鱼\n  - 学习\n  - 刷剧\n- 星期二\n - 摸一天鱼\n\n> ### 图片示例\n![学伴小程序](https://user-images.githubusercontent.com/7202516/58466803-03ff6b80-816d-11e9-8afd-f56bdff5a60a.jpg)\n\n> ### 链接示例\n[学伴H5](https://xueban.qjm253.cn/h5)\n\n> ### 表格示例\n\nname | 价格 |  数量  \n-|-|-\n香蕉 | $1 | 5 |\n苹果 | $1 | 6 |\n草莓 | $1 | 7 |\n> ### 字体示例\n\n**粗体**\n*斜体*\n***粗体斜体***\n`高亮`\n> ### 代码块示例\n\n```c\n#include<stdio.h>\n```'
    }
  }

  componentDidMount() {}

  componentWillReceiveProps (nextProps) {
    console.log(this.props, nextProps)
  }

  componentWillUnmount () { }

  config = {
    navigationBarTitleText: 'markdown解析示例'
  }

  componentDidShow () { }

  componentDidHide () { }

  handleImageClick(img) {
    Taro.previewImage({
      urls: [img.src, img.src]
    })
  }
  handleOnLinkClick(src) {
    console.log(src);
  }

  render () {
    return (
      <View className='content' style={{
        padding: Taro.pxTransform(20)
      }}
      >
        <TaroRichTextNoWxParse
          raw={false}
          type='markdown'
          richText={this.state.richText}
          onImageClick={this.handleImageClick.bind(this)}
          onLinkClick={this.handleOnLinkClick.bind(this)}
        />
      </View>
    )
  }
}

export default Richtext
