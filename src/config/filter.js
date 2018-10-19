import Vue from 'vue'; //vue
import * as filters from '@/common/filters/index';

//filters
Object.keys(filters.default).forEach(key => {
	Object.keys(filters.default[key]).forEach(ckey => {
		Vue.filter(ckey, filters.default[key][ckey]);
	});
});

/**
 * textareaFilter
 */
Vue.prototype.textareaFilter = function(val) {
	if (!val) {
		return '';
	}
	if (typeof val === "string") {
		var s = '';
		s = val.replace(/&amp;/g, "&");
		s = s.replace(/<(?=[^o][^)])/g, "&lt;");
		s = s.replace(/>/g, "&gt;");
		s = s.replace(/\"/g, "&quot;");
		s = s.replace(/\n/g, "<br>");
		return s;
	}
	return val;
};