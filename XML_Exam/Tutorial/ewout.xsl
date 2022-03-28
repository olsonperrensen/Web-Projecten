<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">
  <xsl:template match="/">
    <html lang="en">
    <head>
      <title>buurlanden</title>
      <style>
        table,th,td {
          border: 1px solid black;
          border-collapse:collapse;
        }
        img {
          width: 30px;
          height: 20px;
        }
      </style>   
    </head>
    <body>
      <h1>België en, zijn buurlanden</h1>
      <p>In de onderstaande tabel vind je België en zijn voornaamste buurlanden (situatie op 01/01/2013)</p>
      <table>
        <tr>
          <th>Land</th>
          <th>Hoofdstad</th>
          <th>Vlag</th>
          <th>Staatshoofd</th>
          <th>Troonopvolger</th>
        </tr>
        <xsl:apply-templates select="buurlanden/land">
        </xsl:apply-templates>
      </table>
      
    </body>
    </html>
  </xsl:template>
    
  <xsl:template match="land">
    <tr>
      <td>
        <xsl:value-of select="landnaam"/>
      </td>
      <td>
        <xsl:value-of select="hoofdstad"/>
      </td>
      <td>
        <img src="{kenteken}.gif" alt="{kenteken}.gif"/>
      </td>
      <td>
        <xsl:value-of select="staatshoofd/naam/@aanspreektitel"/><xsl:text> </xsl:text> <xsl:value-of select="staatshoofd/naam"/>
      </td>
      <td>
        <xsl:value-of select=".[@staatsvorm='monarchie']/staatshoofd/naam/@aanspreektitel"/><xsl:text> </xsl:text> <xsl:value-of select=".[@staatsvorm='monarchie']/staatshoofd/naam"/>
        
      </td>
    </tr>
  </xsl:template>
</xsl:stylesheet>