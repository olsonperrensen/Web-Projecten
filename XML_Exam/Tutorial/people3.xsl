<?xml version="1.0"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<xsl:template match="/">
<html>
<head>
<meta charset="utf-8"/>
<title>XSL does CSS!</title>
</head>
<body>
<xsl:for-each select="people/husband">
<div style="width:305px;margin:0 auto;color:white;background-color:steelblue;text-align:center;border:4px outset">
<xsl:apply-templates select="name"/>
<xsl:apply-templates select="age"/>
</div>
</xsl:for-each>
</body>
</html>
</xsl:template>

<xsl:template match="name">
<div style="font-family:times;font-size:4rem">
<xsl:value-of select="."/>
</div>
</xsl:template>

<xsl:template match="age">
<div  style="font-family:monospace;font-size:2rem">
<xsl:value-of select="."/>
</div>
</xsl:template>

</xsl:stylesheet>