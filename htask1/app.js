(function ()
{
	var word1 = prompt("Введите 1 слово:", "полиндром?");
	var word2 = prompt("Введите 2 слово:", reverse("полиндром?"));


	if (word1 == reverse(word2) )
	{
		alert ("Эй, ты ввел полиндромы!");
	}
	else
	{
		var result = isAnagram (word1, word2);
		alert (result);
	}

	function reverse(s)
	{
	    return s.split("").reverse().join("");
	}

	function sort (str)
	{
		return str.replace(/\s+/g, '').toLowerCase().split('').sort().join('');
	}

	function isAnagram (original, test)
	{
		return original.trim() === test.trim() ? false : sort(original) === sort(test);
	}
})();