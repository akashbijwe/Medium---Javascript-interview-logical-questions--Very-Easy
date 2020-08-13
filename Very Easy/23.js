function addOddToN(n) {
	num = 0
	for(i=1;i<=n;i++)
		num += i%2 == 0 ? 0 : i
	return num
}