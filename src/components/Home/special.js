/**
 * Created by Administrator on 2016/7/2.
 */
import React, { Component } from 'react';
import { Link } from 'react-router';

require('./styles/special.less')

/*const*/
import * as con from 'utils/const';

/*files*/
const zht_1 = require('./files/zht1.jpg');
const zht_2 = require('./files/zht2.jpg');

export class Special extends Component {

    render() {

        return (
            <div className="style_main">
                <p className="style_p">专题</p>
                <div className="style_div">
                    <div className="style_left">
                        <img src={zht_1} className="style_img" />
                    </div>
                    <div className="style_right">
                        <img src={zht_2} className="style_img" />
                    </div>
                </div>
            </div>
        )
    }
}