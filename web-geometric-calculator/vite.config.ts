
import { defineConfig } from 'vite';

export default defineConfig({
  base: './', // 👈 Esto obliga a usar rutas relativas para que S3 encuentre los estilos y scripts
});


// import { defineConfig } from 'vite';
// import minifyHTML from 'rollup-plugin-minify-html-literals';

// export default defineConfig({
//   // Define la ruta base si no vas a desplegar en la raíz del dominio
//   // base: '/mi-subcarpeta/', 
//   build: {
//     // Directorio de salida para los archivos estáticos
//     outDir: 'dist',
//     // Optimiza la carga de módulos indexando assets
//     assetsDir: 'assets',
//     // Vacía el directorio antes de compilar
//     emptyOutDir: true,
//   },
//   plugins: [
//     // Opcional: Minifica las plantillas HTML dentro de tus componentes Lit
//     minifyHTML(),
//   ],
// });

