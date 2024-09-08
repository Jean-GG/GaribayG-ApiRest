# ¿Que son las restricciones REST?

En REST (Representational State Transfer), las "restricciones" son principios arquitectónicos que definen cómo debe ser diseñado un sistema para que sea considerado "RESTful". Estas restricciones son las siguientes:

**Interfaz uniforme:** Todas las interacciones entre el cliente y el servidor deben seguir un contrato uniforme. Esto se logra utilizando un conjunto común de métodos HTTP (GET, POST, PUT, DELETE, etc.) y recursos que siguen una estructura bien definida.

**Sin estado (stateless):** Cada solicitud del cliente al servidor debe contener toda la información necesaria para entenderla, sin depender de un contexto almacenado en el servidor. Esto significa que no se guarda información de sesión en el servidor entre solicitudes.

**Cacheable:** Las respuestas de los servidores deben indicar si son cacheables o no, para que los clientes puedan reutilizarlas si es posible, mejorando así el rendimiento y reduciendo la carga del servidor.

**Cliente-servidor:** La arquitectura debe mantener una separación clara entre el cliente y el servidor. El cliente se encarga de la interfaz de usuario, mientras que el servidor gestiona los datos y las operaciones. Esto permite que ambos evolucionen independientemente.

**Sistemas en capas:** Un cliente no debe ser capaz de distinguir si está directamente conectado al servidor o a un intermediario (como un proxy o balanceador de carga). Esto permite que los servidores se puedan escalar y agregar intermediarios como caches o autenticadores sin que el cliente lo perciba.

**Código bajo demanda (opcional):** Los servidores pueden enviar código ejecutable al cliente, como JavaScript en aplicaciones web. Aunque esta restricción es opcional, permite agregar funcionalidad al cliente de forma dinámica.

**Representación de recursos:** Los recursos (como objetos o datos) se identifican con una URI (Uniform Resource Identifier) y se pueden manipular a través de sus representaciones (por ejemplo, en formato JSON o XML).