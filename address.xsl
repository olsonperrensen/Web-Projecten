<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">
  <xsl:template match="/addresses">
  <html>
<head>
<meta charset="utf-8"/>
<title>A test</title>
<link href="address.css" rel="stylesheet"></link>
</head>
<body>
<table>
<caption>MY XSL TABLE</caption>
<tr>
<th>First Name</th>
<th>Last Name</th>
<th>Place</th>
</tr>
<xsl:apply-templates select="address" />
</table>
</body>  
  </html>
  </xsl:template>
  
  
<xsl:template match="address">
<tr>
<td><xsl:value-of select="firstname" /></td>
<td><xsl:value-of select="lastname" /></td>
<td><xsl:value-of select="place" /></td>
</tr>
</xsl:template>    
</xsl:stylesheet>
