var d = require("../lib/index.js")
var assert = require('assert');


    it('Probando cargar 20 datos de NASDAQ:GGAL', function(done) {
			d.maker("GGAL","NASDAQ",20,x=>{
				assert.equal(20, x.length, "Success");
				done()
		});
    });



