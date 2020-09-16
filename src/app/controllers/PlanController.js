/**
- title (nome do plano);
- duration (duração em número de meses);
- price (preço mensal do plano);
- created_at;
- updated_at;
 */

import * as Yup from 'yup';
import Plan from '../models/Plan';

class PlanController {
  async store(req, res) {
    const schema = Yup.object().shape({
      title: Yup.string().required(),
      duration: Yup.number().positive().required(),
      price: Yup.number().positive().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    const planExists = await Plan.findOne({ where: { title: req.body.title } });

    if (planExists) {
      return res.status(400).json({ error: 'Plan title already exists' });
    }

    const { id, title, duration, price } = await Plan.create(req.body);

    return res.json({
      id,
      title,
      duration,
      price,
    });
  }

  async index(req, res) {
    const plans = await Plan.findAll({ order: ['id'] });
    return res.json(plans);
  }

  async update(req, res) {
    const schema = Yup.object().shape({
      title: Yup.string(),
      duration: Yup.number().positive(),
      price: Yup.number().positive(),
    });

    const { id } = req.params;
    const { title } = req.body;

    const plan = await Plan.findByPk(id);

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    if (!(plan.title === title)) {
      const planExists = await Plan.findOne({
        where: { title: req.body.title },
      });

      if (planExists) {
        return res.status(400).json({ error: 'Plan title already exists' });
      }
    }

    const { duration, price } = await plan.update(req.body);

    return res.json({ id, title, duration, price });
  }

  async delete(req, res) {
    const { id } = req.params;

    const plan = await Plan.findByPk(id);

    if (!plan) {
      return res.status(404).json({ error: 'Plan does not exists' });
    }

    await plan.destroy();

    return res.json({ message: 'Plan deleted sucessfuly' });
  }
}

export default new PlanController();
