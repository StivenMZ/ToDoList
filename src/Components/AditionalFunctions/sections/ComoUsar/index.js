import React from "react";
import styled from "styled-components";

const SectionHowTo = styled.section`
  width: 100%;
  height: 100%;
  min-height: 50vh;
  max-height: 60vh;

  @media screen and (max-width: 300px) {
width: 98%;
    }
`;

const ArticleHowTo = styled.article`
  display: flex;
  flex-direction: column;
  padding: 1% 1.3%;
  overflow-wrap: break-word;
  width: 100%;
  background-color: ${({theme}) => theme.SectionBGcolor};
  border-radius: 1rem;
  height: 100%;
`;

const TitleHowTo = styled.h4`
  color: ${({ theme }) => theme.TitleResourceColor};
  font-weight: bold;
  font-size: 1.2rem;
  margin-bottom: 1%;

  @media screen and (max-width: 1199px) {
 font-size :1.4rem ;
}

@media screen and (max-width: 768px) {
font-size: 1.8rem;
}


`;

const UlHowTo = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  overflow-y: auto;
  max-height: 60vh;



`;

const LiHowTo = styled.li`
  color: ${({ theme }) => theme.PhResource};
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
`;

const LiTitle = styled.h6`
  font-weight: bold;

  @media screen and (max-width: 1199px) {
 font-size :1.2rem ;
}
@media screen and (max-width: 768px) {
font-size: 1.7rem;
}


`;

const LiPh = styled.p`
  color: ${({ theme }) => theme.PhResource};

  @media screen and (max-width: 1199px) {
 font-size :1.17rem ;
}

@media screen and (max-width: 768px) {
font-size: 1.6rem;
}

`;

const UlHowToFun = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: left;
  max-height: 60vh;

  @media screen and (max-width: 400px) {
margin-bottom: 1%
    }

`;

const LiHowToFun = styled.li`
  color: ${({ theme }) => theme.PhResource};
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
  margin-left: 2%;

  @media screen and (max-width: 1199px) {
 font-size :1.2rem ;
}

`;

const LiTitleFun = styled.h6`
  font-weight: bold;
  @media screen and (max-width: 768px) {
font-size: 1.7rem;
}
  

`;

const LiPhFun = styled.p`
  color: ${({ theme }) => theme.PhResource};

  @media screen and (max-width: 768px) {
font-size: 1.6rem;
}
`;

const HowTo = () => {
  return (
    <SectionHowTo>
      <ArticleHowTo>
        <TitleHowTo>Aprende a usar este sitio web</TitleHowTo>
        <UlHowTo>
          <LiHowTo>
            <LiTitle>¿Cómo crear tareas?</LiTitle>
            <LiPh>En "Home", clic en "Crear tarea", completa el formulario y haz clic en "Crear".</LiPh>
            <LiPh>Recibirás una notificación así: "Tarea (nombre) ha sido creada exitosamente"</LiPh>
          </LiHowTo>

          <LiHowTo>
            <LiTitle>¿Cómo ver mi lista de tareas?</LiTitle>
            <LiPh>En "Home" o menú de navegación, clic en "Lista de tareas". Filtra por prioridad si deseas.</LiPh>
          </LiHowTo>

          <LiHowTo>
            <LiTitle>¿Cómo completar una tarea?</LiTitle>
            <LiPh>En "Lista de tareas", encuentra la tarea, clic en "Completar", confirma.</LiPh>
            <LiPh>Recibirás una notificación así:: "Completaste la tarea (nombre)"</LiPh>
          </LiHowTo>

          <LiHowTo>
            <LiTitle>¿Cómo eliminar una tarea?</LiTitle>
            <LiPh>En "Lista de tareas", encuentra la tarea, clic en "Eliminar", confirma.</LiPh>
            <LiPh>Recibirás una notificación así:: "Tarea (nombre) eliminada"</LiPh>
          </LiHowTo>

          <LiHowTo>
            <LiTitle>¿Puedo revertir una tarea completada?</LiTitle>
            <LiPh>No, las tareas completadas quedan así definitivamente.</LiPh>
          </LiHowTo>

          <LiHowTo>
            <LiTitle>¿Puedo recuperar una tarea eliminada?</LiTitle>
            <LiPh>No, las tareas se eliminan definitivamente.</LiPh>
          </LiHowTo>

          <LiHowTo>
            <LiTitle>¿Puedo ver tareas completadas nuevamente?</LiTitle>
            <LiPh>Sí, en "Lista de tareas" con la opción "Ver completadas".</LiPh>
          </LiHowTo>

          <LiHowTo>
            <LiTitle>¿Cómo buscar tareas sin ir a la lista?</LiTitle>
            <LiPh>En la barra superior, usa la búsqueda por título o descripción. Puedes completar o eliminar las tareas mediante la su búsqueda</LiPh>
          </LiHowTo>

          <LiHowTo>
            <LiTitle>¿Qué hay en el historial?</LiTitle>
            <LiPh>Registro de actividad: creación, completado o eliminación de tareas con fecha y hora.</LiPh>
          </LiHowTo>

          <LiHowTo>
            <LiTitle>Más funciones</LiTitle>
            <LiPh>Haz click en cada opción para ver la información. Luego haz click de nuevo en el título para ocultar el contenido y volver a más funciones.</LiPh>
            <br></br>
            <LiPh>A continuación, una descripción breve de cada "función adicional":</LiPh>
            <UlHowToFun>
              <LiHowToFun>
                <LiTitleFun>¿Cómo usar este sitio web?</LiTitleFun>
                <LiPhFun>Guía detallada del uso del sitio.</LiPhFun>
              </LiHowToFun>

              <LiHowToFun>
                <LiTitleFun>¿Tienes sugerencias?</LiTitleFun>
                <LiPhFun>Envía sugerencias mediante un formulario simple.</LiPhFun>
              </LiHowToFun>

              <LiHowToFun>
                <LiTitleFun>Recursos útiles</LiTitleFun>
                <LiPhFun>Herramientas como el método pomodoro para mejorar la productividad.</LiPhFun>
              </LiHowToFun>

              <LiHowToFun>
                <LiTitleFun>Noticias o actualizaciones</LiTitleFun>
                <LiPhFun>Información sobre nuevas funcionalidades o noticias importantes.</LiPhFun>
              </LiHowToFun>

              <LiHowToFun>
                <LiTitleFun>Centro de ayuda</LiTitleFun>
                <LiPhFun>Preguntas frecuentes y respuestas sobre el uso del sitio.</LiPhFun>
              </LiHowToFun>

              <LiHowToFun>
                <LiTitleFun>Políticas de privacidad y términos de uso</LiTitleFun>
                <LiPhFun>Condiciones de uso de la web.</LiPhFun>
              </LiHowToFun>

              <LiHowToFun>
                <LiTitleFun>Sobre este sitio web</LiTitleFun>
                <LiPhFun>Detalles sobre las tecnologías utilizadas y acceso al código fuente en GitHub.</LiPhFun>
              </LiHowToFun>
            </UlHowToFun>
          </LiHowTo>

          <LiHowTo>
            <LiTitle>¿Como puedo cambiar el tema de colores?</LiTitle>
            <LiPh>En el menú de navegación. Haz clic en el ícono del sol, para activar el modo claro, o, clic en el ícono de la luna, para activar el modo oscuro</LiPh>
          </LiHowTo>

        </UlHowTo>
      </ArticleHowTo>
    </SectionHowTo>
  );
};

export default HowTo;
