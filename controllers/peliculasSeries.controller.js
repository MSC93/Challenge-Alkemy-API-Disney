import PeliculasSeriesModel from "../models/peliculasSeries.model.js";

export const getAllPelisSeries = async (req, res) => {
  try {
    const pelSerie = await PeliculasSeriesModel.findAll();
    res.json(pelSerie);
  } catch (error) {
    res.json({ message: error.message });
  }
};

export const getPelisSeries = async (req, res) => {
  try {
    const pelSerie = await PeliculasSeriesModel.findOne({
      where: {
        id: req.params.id,
      },
    });
    res.json(pelSerie);
  } catch (error) {
    res.json({ message: error.message });
  }
};

export const createPelisSeries = async (req, res) => {
  try {
    await PeliculasSeriesModel.create(req.body);
    res.json({
      message: `Pelicula/Serie creada correctamente (${req.body.title})`,
    });
  } catch (error) {
    res.json({ message: error.message });
  }
};

export const updatePelisSeries = async (req, res) => {
  try {
    await PeliculasSeriesModel.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    res.json({ message: "Pelicula/Serie actualizada correctamente" });
  } catch (error) {
    res.json({ message: error.message });
  }
};

export const deletePelisSeries = async (req, res) => {
  try {
    await PeliculasSeriesModel.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.json({ message: "Pelicula/Serie eliminada" });
  } catch (error) {
    res.json({ message: error.message });
  }
};
