<?xml version="1.0"?>
<xsl:stylesheet version="1.0" 
xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
>
<xsl:template match="/">
<html>
<body>
<xsl:apply-templates/>
</body>
</html>
</xsl:template>
<xsl:template match="people">
 Number of husbands: <xsl:value-of select="count(husband/name)"/>
</xsl:template>
</xsl:stylesheet>