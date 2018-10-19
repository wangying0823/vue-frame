import {
	jstz
} from '../../libs/plugs/timezone';
import H5CallApp from '@/libs/h5/h5CallApp'; //h5 app通信

const esService = {
	/**
	 * 当前时区
	 */
	timezone: function() {
		return jstz.determine().name();
	},
	/**
	 * 处理错误消息提示
	 */
	handleError: function(error) {
		//error
		if (typeof(error) === 'string') {
			esH5Vue.$message.error(error);
		}
	},
	/**
	 * UniDecode解码
	 */
	uniDecode: function(a) { 
		if (!a) {
			return '';
		}
		a = a.replace(/\\/g, "%").replace("%u0025", "%25"), a = unescape(a.toString().replace(/%2B/g, "+"));            
		var b = a.match(/(%u00([0-9A-F]{2}))/gi);            
		if (b)
			for (var c = 0; c < b.length; c++) {                    
				var d = b[c].substring(1, 3),
					                        e = Number("0x" + d);                    
				e >= 128 && (a = a.replace(b[c], d))            
			}            
		return a = unescape(a.toString().replace(/%2B/g, "+")), a
	},
	/**
	 * 转换参数
	 * @param  {[type]} url [description]
	 * @return {[type]}     [description]
	 */
	parseQueryString: function(opts) {
		var url = opts.url || window.location.hash;
		//对url进行解码
		url = decodeURI(url);
		var reqParams = {};
		if (url.indexOf("?") > -1) {
			var str = url.split("?")[1],
				strs = str.split("&");
			strs.forEach(function(v) {
				var tempArr = v.split("=");
				if (tempArr[0]) {
					reqParams[tempArr[0]] = esService.uniDecode(tempArr[1]);
				}
			});
		}
		opts.success && opts.success(reqParams);
	},
	/**
	 * 自动转换https 在生产环境下
	 */
	autoPrefixHttps: function(url) {
		//获取iframe url
		if (url && url.indexOf("http://") == 0 && window.esConfig.model != "dev") {
			return url.replace(/http:/, "https:");
		} else {
			return url;
		}
	},
};
export default esService;