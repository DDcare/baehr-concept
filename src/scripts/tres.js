// Solo las piezas de three.js que usa el visor de la ficha. Importar el módulo entero de forma dinámica
// obligaba a servir la biblioteca completa también en la home: así el empaquetador puede descartar lo que no se usa.
export { CanvasTexture, Color, DirectionalLight, DoubleSide, Group, HemisphereLight, MathUtils, Mesh, MeshBasicMaterial, NeutralToneMapping, PMREMGenerator, PerspectiveCamera, PlaneGeometry, SRGBColorSpace, Scene, WebGLRenderer } from 'three';
