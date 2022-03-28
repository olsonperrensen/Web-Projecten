<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">
  <xsl:template match="/">
  <html>
<body>
<xsl:for-each select="/Nashville/person">
<div style="background-color:magenta"><p style="text-align:center">SPACE IN BETWEEN</p></div>
<div style="display:flex;flex-direction:row">
<h2 style="color:steelblue"><xsl:value-of select="name"/></h2>
<hr/>
<h3 style="color:skyblue"><xsl:value-of select="age"/></h3>
<hr/>
<h4 style="color:pink"><xsl:value-of select="residence"/></h4>
</div>
</xsl:for-each>
</body>
  </html>
  </xsl:template>
</xsl:stylesheet>
