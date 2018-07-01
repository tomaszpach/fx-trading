import React, {Component} from 'react';
import Title from './panelTitle';
import SellBuy from './sellBuy';
import Arrow from './arrow';


class index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pair: this.props.data.pair,
            buy: this.props.data.buy,
            sell: this.props.data.sell,
            arrow: false
        }
    }

    updateBuyValue(newValue, prevValue) {
        this.setState({
            buy: newValue,
            arrow: newValue > prevValue
        })
    }

    componentDidMount() {
        const { buy } = this.props.data;

        setInterval(() => {
            const random = Math.floor((Math.random() * 10) + 1);

            if (random % 2 === 0) {
                this.updateBuyValue(buy + buy * (random / 100), buy);
            } else {
                this.updateBuyValue(buy - buy * (random / 100), buy);
            }
        }, 1000);
    }

    render() {
        const { sell, buy, pair, arrow} = this.state;

        return (
            <div className='panel'>
                <Title pair={pair}/>
                <section className='sell-buy'>
                    <SellBuy value={sell} pair={pair} target={'sell'}/>
                    <Arrow arrow={arrow} />
                    <SellBuy value={buy} pair={pair} target={'buy'}/>
                </section>
            </div>
        )
    }
}

export default index;