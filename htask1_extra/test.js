
change1 ();


function to_change ()
{
	for (var i = 0; i < 10; i++)
	{
		setTimeout(function()
			{
				console.log(i);
			}, 1000);
	}
}

function change1 ()
{
	for (var i = 0; i < 10; i++)
	{
		setTimeout((function(i)
			{
				return function ()
				{
					console.log(i);
				}
			})(i), 1000);
	}

}

function change2 ()
{
	for (var i = 0; i < 10; i++)
	{
		(function (i) {
			var new_i = i;
			setTimeout(function()
				{
					console.log(new_i);
				}, 1000);
		})(i);
	}

}


