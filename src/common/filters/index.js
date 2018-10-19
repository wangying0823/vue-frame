/**
 * [esFilter description]
 * @type {Object}
 */
// import Vue from 'vue';
import moment from "moment";
import ossService from '../services/ossService';

const esFilter = {
	/**
	 * 通用暂无数据
	 */
	esNullFilter(str) {
		if (!str || str == 'undefined') {
			str = '暂无';
		}
		return str;
	}
};

export default {
	esFilter
};