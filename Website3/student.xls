<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<xsl:template match="/">
    <html>
        <body>
            <table border="1">
                <tr>
                    <th>Exercise</th>
                    <th>Set 1</th>
                    <th>Set 2</th>
                    <th>Set 3</th>
                    <th>Set 4</th>
                </tr>
                <xsl:for-each select="college/student">
                    <tr>
                        <td><xsl:value-of select="username"/></td>
                        <td><xsl:value-of select="password"/></td>
                        <td><xsl:value-of select="firstname"/></td>
                        <td><xsl:value-of select="lastname"/></td>
                        <td><xsl:value-of select="gender"/></td>
                    </tr>
                </xsl:for-each>
            </table>
        </body>
    </html>
</xsl:template>    
</xsl:stylesheet>