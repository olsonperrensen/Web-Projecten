<?xml version="1.0"?>
<xsl:stylesheet version="1.0" 
xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<xsl:template match="/">
<html>
<head>
<title>TEST</title></head>
<body>
<ul>
<xsl:for-each select="people/husband">
<xsl:sort order="ascending" select="name" />
<xsl:apply-templates select="name"/>
</xsl:for-each>
</ul>

</body>
</html>
</xsl:template>

<xsl:template match="name">
<li><xsl:value-of select="." /></li>
</xsl:template>

</xsl:stylesheet>