<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">
<xsl:template match="/books">
<html>
<head>
<meta charset="utf-8"/>
<title>My First XSL</title>
<link href="style_books.css" rel="stylesheet"/>
</head>
<body>
<table>
<tr>
<th>writer</th>
<th>title</th>
<th>ISBN</th>
</tr>
<xsl:apply-templates select="book" /> 
</table>
</body>
</html>
</xsl:template>
<xsl:template match="book">
<tr>
<td><xsl:value-of select="writer"/></td>
<td><xsl:value-of select="title"/></td>
<td><xsl:value-of select="ISBN"/></td>
</tr>
</xsl:template>
</xsl:stylesheet>