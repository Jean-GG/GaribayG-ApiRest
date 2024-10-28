# JSON Web Token (JWT)

Un **JSON Web Token (JWT)** es un estándar abierto (RFC 7519) que define una forma compacta y segura de transmitir información entre dos partes en formato JSON. Los JWT se utilizan comúnmente en la autenticación y autorización de aplicaciones web y APIs. Su principal ventaja es que contienen toda la información en sí mismos, lo que permite verificar la autenticidad sin necesidad de consultar una base de datos externa.

## Estructura de un JWT

Un JWT está compuesto por tres partes, cada una codificada en Base64 y separada por puntos (`.`):

1. **Header** (Encabezado)
2. **Payload** (Carga útil)
3. **Signature** (Firma)

### 1. Header

El **Header** especifica el tipo de token (`JWT`) y el algoritmo de encriptación utilizado para la firma (por ejemplo, HMAC SHA256 o RSA). Su estructura es similar a:

json
{
  "alg": "HS256",
  "typ": "JWT"
}

### 2. Payload

El Payload es la segunda parte y contiene las afirmaciones (claims). Los claims son declaraciones sobre la identidad del usuario y otros datos relevantes. Hay tres tipos principales de claims:

- Registered claims: Claims estándar como iss (emisor), exp (expiración), sub (asunto) y aud (audiencia).
- Public claims: Claims personalizados definidos por el usuario, como username.
- Private claims: Claims específicos que solo son compartidos entre emisores y receptores específicos.

### 3. Signature

La Signature o firma garantiza que el token no ha sido modificado. La firma se crea usando el algoritmo especificado en el header, el contenido codificado del header y el payload, junto con una clave secreta compartida entre emisor y receptor.

Para generar la firma, se usa la siguiente fórmula:

HMACSHA256(
  base64UrlEncode(header) + "." +
  base64UrlEncode(payload),
  secret)

Ejemplo de JWT:
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWV9.TJVA95OrM7E2cBab30RMHrHDcEfxjoYZgeFONFh7HgQ
