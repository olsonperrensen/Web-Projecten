<?xml version="1.0"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">
<xsl:template match="/">
<html>
<body>
<table style="background-color:yellow;width:50%" border="2">
<tr>
<th>firstname</th>
<th>lname</th>
<th>address</th>
</tr>
<xsl:for-each select="/root/people">
<tr>
<td>
<xsl:value-of select="./name"/>
</td>
<td>
<xsl:value-of select="./lname"/>
</td>
<td>
<xsl:value-of select="./place"/>
</td>
</tr>
</xsl:for-each>
</table>
</body>
</html>
</xsl:template>

<!--<xsl:template match="/root/people">
<tr>
<td>
<xsl:value-of select="./name"/>
</td>
<td>
<xsl:value-of select="./lname"/>
</td>
<td>
<xsl:value-of select="./place"/>
</td>
</tr>
</xsl:template>-->


</xsl:stylesheet>