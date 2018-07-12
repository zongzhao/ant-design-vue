import '../assets/index.less'
import Slider from '../src/slider'
const baseUrl = 'https://s3.amazonaws.com/static.neostack.com/img/react-slick'

export default {
  data () {
    return {
      slideIndex: 0,
      updateCount: 0,
    }
  },

  render () {
    const settings = {
      props: {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        afterChange: () => { this.updateCount = this.updateCount + 1 },
        beforeChange: (current, next) => { this.slideIndex = next },
      },
      ref: 'slider',
    }
    return (
      <div>
        <h2>Slick Go To</h2>
        <p>Total updates: {this.updateCount} </p>
        <input
          onInput={e => this.$refs.slider.slickGoTo(e.target.value)}
          value={this.slideIndex}
          type='range'
          min={0}
          max={3}
        />
        <Slider {...settings}>
          <div>
            <img src={baseUrl + '/abstract01.jpg'} />
          </div>
          <div>
            <img src={baseUrl + '/abstract02.jpg'} />
          </div>
          <div>
            <img src={baseUrl + '/abstract03.jpg'} />
          </div>
          <div>
            <img src={baseUrl + '/abstract04.jpg'} />
          </div>
        </Slider>
      </div>
    )
  },
}
