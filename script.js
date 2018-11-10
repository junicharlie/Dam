// JavaScript Document
$(document).ready(function() {
    $(&quot;.paging&quot;).show(); 
    $(&quot;.paging a:first&quot;).addClass(&quot;active&quot;);

var imageWidth = $(&quot;.easyslider&quot;).width(); 
var imageSum = $(&quot;.image_reel img&quot;).size(); 
var imageReelWidth = imageWidth * imageSum;

    $(&quot;.image_reel&quot;).css({&#39;width&#39; : imageReelWidth});

rotate = function(){ var triggerID = $active.attr(&quot;rel&quot;) - 1; 

var image_reelPosition = triggerID * imageWidth;

    $(&quot;.paging a&quot;).removeClass(&#39;active&#39;);
        $active.addClass(&#39;active&#39;);

    $(&quot;.easytitledes&quot;).stop(true,true).slideUp(&#39;slow&#39;);
    $(&quot;.easytitledes&quot;).eq( 
    $(&#39;.paging a.active&#39;).attr(&quot;rel&quot;) - 1 ).slideDown(&quot;slow&quot;); 
    $(&quot;.image_reel&quot;).animate({left: -image_reelPosition}, 400 );
    };

rotateSwitch = function(){
    $(&quot;.easytitledes&quot;).eq( $(&#39;.paging a.active&#39;).attr(&quot;rel&quot;) - 1 ).slideDown(&quot;slow&quot;);

play = setInterval(function(){
    $active = $(&#39;.paging a.active&#39;).next();

if ( $active.length === 0) {
    $active = $(&#39;.paging a:first&#39;); } rotate(); }, 4000); };

rotateSwitch(); $(&quot;.image_reel a, .easytitledes a&quot;).hover(function() {
    clearInterval(play); }, function() { rotateSwitch();
    });
    $(&quot;.paging a&quot;).click(function() { $active = $(this);
    clearInterval(play); rotate(); rotateSwitch();  return false;
    });
});

function PopupCenter(pageURL, title,w,h) {
			var left = (screen.width/2)-(w/2);
			var top = (screen.height/2)-(h/2);
			var targetWin = window.open (pageURL, title, &#39;toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=yes, resizable=no, copyhistory=no, width=&#39;+w+&#39;, height=&#39;+h+&#39;, top=&#39;+top+&#39;, left=&#39;+left);
        }

$(document).ready(function() {
		var delay = 46800;
		var jackpot = 0;
		pull_jackpot();
		var timer;
		function pull_jackpot() {
		var nominal = 1383806986;
		if (jackpot == 0) jackpot = parseInt(nominal - 100000000);
		var amount = 1000000 / delay * 1;
 
		timer = setInterval(function() { jackpot = set_jackpot(jackpot, nominal, amount); }, 1);
		}

		function set_jackpot(jackpot, nominal, amount) {
			var jackpot = jackpot + amount;
			if (jackpot &gt;= nominal) {
				clearInterval(timer);
				pull_jackpot();
			} else {
				var result = addCommas(parseInt(jackpot));
				$(&#39;#number&#39;).html(result);
			}
			return jackpot;
		}
		function addCommas(nStr) {
			nStr += &#39;&#39;;
			x = nStr.split(&#39;.&#39;);
			x1 = x[0];
			x2 = x.length &gt; 1 ? &#39;.&#39; + x[1] : &#39;&#39;;
			var rgx = /(\d+)(\d{3})/;
			while (rgx.test(x1)) {
				x1 = x1.replace(rgx, &#39;$1&#39; + &#39;,&#39; + &#39;$2&#39;);
			}
			return x1 + x2;
		}
	})
$(document).ready(function() {
		var delay = 46800;
		var jackpot = 0;
		pull_jackpot();
		var timer;
		function pull_jackpot() {
		var nominal = 860245849;
		if (jackpot == 0) jackpot = parseInt(nominal - 100000000);
		var amount = 1000000 / delay * 1;
 
		timer = setInterval(function() { jackpot = set_jackpot(jackpot, nominal, amount); }, 1);
		}

		function set_jackpot(jackpot, nominal, amount) {
			var jackpot = jackpot + amount;
			if (jackpot &gt;= nominal) {
				clearInterval(timer);
				pull_jackpot();
			} else {
				var result = addCommas(parseInt(jackpot));
				$(&#39;#number1&#39;).html(result);
			}
			return jackpot;
		}
		function addCommas(nStr) {
			nStr += &#39;&#39;;
			x = nStr.split(&#39;.&#39;);
			x1 = x[0];
			x2 = x.length &gt; 1 ? &#39;.&#39; + x[1] : &#39;&#39;;
			var rgx = /(\d+)(\d{3})/;
			while (rgx.test(x1)) {
				x1 = x1.replace(rgx, &#39;$1&#39; + &#39;,&#39; + &#39;$2&#39;);
			}
			return x1 + x2;
		}
	})