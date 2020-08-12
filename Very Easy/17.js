function modifyLast(str, n) {
	return str + str.slice(-1).repeat(n - 1)
}