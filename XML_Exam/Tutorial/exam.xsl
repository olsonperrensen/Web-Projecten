<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">
  <xsl:template match="/">
  <html>
<body>
<h1><xsl:for-each select="/city/department">
<xsl:value-of select="."/>
</xsl:for-each></h1>
<!--<xsl:apply-templates></xsl:apply-templates>-->
</body>  
  </html>
  </xsl:template>
  
<!--<xsl:template match="/city/department">
<h3 style="background-color:steelblue;color:white">
<xsl:value-of select="."/>
</h3>
</xsl:template>  -->
</xsl:stylesheet>