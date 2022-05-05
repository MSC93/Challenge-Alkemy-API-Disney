import PersonajesModel from "../models/personajes.model.js";

export const getAllChars = async (req, res) => {
  try {
    const chars = await PersonajesModel.findAll();
    res.json(chars);
  } catch (error) {
    res.json({ message: error.message });
  }
};

export const getChar = async (req, res) => {
  try {
    const char = await PersonajesModel.findOne({
      where: {
        id: req.params.id,
      },
    });
    res.json(char);
  } catch (error) {
    res.json({ message: error.message });
  }
};

export const createChar = async (req, res) => {
  try {
    await PersonajesModel.create(req.body);
    res.json({ message: `Personaje creado correctamente (${req.body.title})` });
  } catch (error) {
    res.json({ message: error.message });
  }
};

export const updateChar = async (req, res) => {
  try {
    await PersonajesModel.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    res.json({ message: "Personaje actualizado correctamente" });
  } catch (error) {
    res.json({ message: error.message });
  }
};

export const deleteChar = async (req, res) => {
  try {
    await PersonajesModel.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.json({ message: "Personaje eliminado" });
  } catch (error) {
    res.json({ message: error.message });
  }
};
