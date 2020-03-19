import { Component, createElement } from "react";
import Carousel from "react-native-snap-carousel";
import { Dimensions } from "react-native";

const { width: viewportWidth } = Dimensions.get("window");

/*const children = [];
if (this.props.storysource.status !== "loading") {
    this.props.storysource.items.forEach(child => children.push(this.props.stories(child)));
}*/

export class CarouselList extends Component {
    _renderItem = ({ item /* , index*/ }) => this.props.content(item);

    render() {
        const loading = this.props.data.status === "loading";
        this.items = [];
        if (!loading) {
            this.items = this.props.data.items;
        }

        return (
            <Carousel
                ref={c => {
                    this._carousel = c;
                }}
                data={this.items}
                renderItem={this._renderItem}
                sliderWidth={viewportWidth}
                itemWidth={viewportWidth - 20}
            />
        );
    }
}
