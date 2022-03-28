<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">

<xsl:template match="/neighbours">
<html>
<head>
  <meta charset="utf-8" />
  <title>neighbours</title>
  <link href="style.css" rel="stylesheet" />
</head>
<body>
    <h1 class="center">Belgium and it's neighbours</h1>
    <p class="center">In the table below you will find Belgium and its main neighbouring countries (situation op 01/01/2020)</p>
    <table>
        <tr><th>country</th><th>capital</th><th>Flag</th><th>head of state</th><th>heir to the throne</th></tr>
        <xsl:for-each select="country">
            <tr>
                <td><xsl:value-of select="countryName" /></td>
                <td><xsl:value-of select="capital" /></td>
                <td class="center"><img><xsl:attribute name="src"><xsl:value-of select="code" /><xsl:text>.gif</xsl:text></xsl:attribute></img></td>
                <td><xsl:value-of select="headOfState/name/@title" /><xsl:text> </xsl:text><xsl:value-of select="headOfState/name" /></td>
                <td><xsl:value-of select="family/child/name/@title" /><xsl:text> </xsl:text><xsl:value-of select="family/child/name" /></td>
            </tr>
        </xsl:for-each>
    </table>
    
    

</body>
</html>
</xsl:template>
 
</xsl:stylesheet>