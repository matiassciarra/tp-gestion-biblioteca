import "./ImagenLibro.css";

export const ImagenLibro = ({ src }) => {
    return (
        <div className="contenedora_imagen">
            <img src={src} alt="" />
        </div>
    );
};
