$j = jQuery;
$j(function()
{
	//Animate InView
	
	
	function scroll_inview(t,top,scrolled)
	{
	
			var winheight = $j(window).height();
			var diff = top - scrolled;
			
			if(diff <= winheight-50)
			{
				$j(t).addClass('run');
			}else
			{
				//$j(t).removeClass(add_class);
			}
	}
	
	
	
	$j('.animate').each(function()
	{
		var top = $j(this).offset().top;
		var t = this;
		var scrolled = $j(window).scrollTop();
			scroll_inview(t,top,scrolled);
			
		$j(window).scroll(function()
		{
			var scrolled = $j(window).scrollTop();
			scroll_inview(t,top,scrolled);
		});
	});
	
	
	
});