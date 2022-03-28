<?xml version="1.0"?>
<xsl:stylesheet version="1.0"
xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
>
<xsl:template match="/">
<html>
<body style="color:white">
<table border="4" style="background-color:purple">
<tr>
<th>Type of House</th>
</tr>
<tr>
<xsl:apply-templates/>
</tr>
</table>
</body>
</html>
</xsl:template>


<xsl:template match="person">
<td style="background-color:red;font-size:4rem">
<xsl:value-of select="residence" />
</td>
</xsl:template>

</xsl:stylesheet>
