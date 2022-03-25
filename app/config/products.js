// Imgs
import machine from "../public/products/machine.png";
import sparePart from "../public/products/spare part.png";
import mold from "../public/products/mold.png";
import block from "../public/products/block.png";

/**
 * Products available
 */
const products = {
  categories: [
    {
      name: {
        es: "Máquinas bloqueras",
        en: "Block machines",
      },
      products: [
        {
          id: "Columbia_Machine_00",
          name: {
            es: "Columbia Machine 00",
            en: "Columbia Machine 00",
          },
          type: {
            es: "Máquina bloquera automática",
            en: "Automatic block machina",
          },
          cardDescription: {
            line1: {
              es: "Semi nueva",
              en: "Semi new",
            },
            line2: {
              es: "Ritmo por hora (aprox): 180 bloques",
              en: "Production per hour (approx): 180 blocks",
            },
          },
          principalImg: machine,
          imgs: [machine, machine, machine],
          items: [
            {
              name: { es: "Condición", en: "Condition" },
              value: { es: "Semi nueva", en: "Like new" },
            },
            {
              name: {
                es: "Ritmo de producción por hora",
                en: "Production rate per hour",
              },
              value: { es: "180 bloques (aprox)", en: "180 blocks (aprox)" },
            },
            {
              name: { es: "Marca", en: "Brand" },
              value: { es: "Columbia Machine", en: "Columbia Machine" },
            },
            {
              name: { es: "Modelo", en: "Model" },
              value: { es: "2003", en: "2003" },
            },
            {
              name: { es: "Dimensiones", en: "Dimensions" },
              value: { es: "2.3m x 1.8m x 1.6m", en: "2.3m x 1.8m x 1.6m" },
            },
            {
              name: { es: "Descripción", en: "Description" },
              value: {
                es: "STIMB compró la máquina en 2018 en buenas condiciones, se le dio mantenimiento ordinario y actualmente se vende en excelentes condiciones y en ritmo de producción óptimo.",
                en: "STIMB bought the machine in 2018 in good condition, it was given regular maintenance and it is currently being sold in excellent condition and with optimal production rate.",
              },
            },
          ],
        },
        {
          id: "Columbia_Machine_11",
          name: {
            es: "Columbia Machine 11",
            en: "Columbia Machine 11",
          },
          type: {
            es: "Máquina bloquera automática",
            en: "Automatic block machina",
          },
          cardDescription: {
            line1: {
              es: "Semi nueva",
              en: "Semi new",
            },
            line2: {
              es: "Ritmo por hora (aprox): 180 bloques",
              en: "Production per hour (approx): 180 blocks",
            },
          },
          principalImg: machine,
          imgs: [machine, machine, machine, machine],
          items: [
            {
              name: { es: "Condición", en: "Condition" },
              value: { es: "Semi nueva", en: "Like new" },
            },
            {
              name: {
                es: "Ritmo de producción por hora",
                en: "Production rate per hour",
              },
              value: { es: "180 bloques (aprox)", en: "180 blocks (aprox)" },
            },
            {
              name: { es: "Marca", en: "Brand" },
              value: { es: "Columbia Machine", en: "Columbia Machine" },
            },
            {
              name: { es: "Modelo", en: "Model" },
              value: { es: "2003", en: "2003" },
            },
            {
              name: { es: "Dimensiones", en: "Dimensions" },
              value: { es: "2.3m x 1.8m x 1.6m", en: "2.3m x 1.8m x 1.6m" },
            },
            {
              name: { es: "Descripción", en: "Description" },
              value: {
                es: "STIMB compró la máquina en 2018 en buenas condiciones, se le dio mantenimiento ordinario y actualmente se vende en excelentes condiciones y en ritmo de producción óptimo.",
                en: "STIMB bought the machine in 2018 in good condition, it was given regular maintenance and it is currently being sold in excellent condition and with optimal production rate.",
              },
            },
          ],
        },
        {
          id: "Columbia_Machine_22",
          name: {
            es: "Columbia Machine 22",
            en: "Columbia Machine 22",
          },
          type: {
            es: "Máquina bloquera automática",
            en: "Automatic block machina",
          },
          cardDescription: {
            line1: {
              es: "Semi nueva",
              en: "Semi new",
            },
            line2: {
              es: "Ritmo por hora (aprox): 180 bloques",
              en: "Production per hour (approx): 180 blocks",
            },
          },
          principalImg: machine,
          imgs: [machine, machine, machine, machine],
          items: [
            {
              name: { es: "Condición", en: "Condition" },
              value: { es: "Semi nueva", en: "Like new" },
            },
            {
              name: {
                es: "Ritmo de producción por hora",
                en: "Production rate per hour",
              },
              value: { es: "180 bloques (aprox)", en: "180 blocks (aprox)" },
            },
            {
              name: { es: "Marca", en: "Brand" },
              value: { es: "Columbia Machine", en: "Columbia Machine" },
            },
            {
              name: { es: "Modelo", en: "Model" },
              value: { es: "2003", en: "2003" },
            },
            {
              name: { es: "Dimensiones", en: "Dimensions" },
              value: { es: "2.3m x 1.8m x 1.6m", en: "2.3m x 1.8m x 1.6m" },
            },
            {
              name: { es: "Descripción", en: "Description" },
              value: {
                es: "STIMB compró la máquina en 2018 en buenas condiciones, se le dio mantenimiento ordinario y actualmente se vende en excelentes condiciones y en ritmo de producción óptimo.",
                en: "STIMB bought the machine in 2018 in good condition, it was given regular maintenance and it is currently being sold in excellent condition and with optimal production rate.",
              },
            },
          ],
        },
      ],
    },
    {
      name: {
        es: "Refacciones",
        en: "Spare parts",
      },
      products: [
        {
          id: "1x7_Mold_0",
          name: {
            es: "Molde 1x7",
            en: "1x7 Mold",
          },
          type: {
            es: "Molde para máquina automática",
            en: "Mold for automatic machine",
          },
          cardDescription: {
            line1: {
              es: "Nueva",
              en: "New",
            },
            line2: {
              es: "5 años de garantía",
              en: "5 year warranty",
            },
          },
          principalImg: mold,
          imgs: [mold, mold, mold, mold],
          items: [
            {
              name: { es: "Condición", en: "Condition" },
              value: { es: "Nuevo", en: "New" },
            },
            {
              name: { es: "Marca", en: "Brand" },
              value: { es: "STIMB", en: "STIMB" },
            },
            {
              name: { es: "Modelo", en: "Model" },
              value: {
                es: "Columbia Machine 22 - 2003",
                en: "Columbia Machine 22 - 2003",
              },
            },
            {
              name: { es: "Dimensiones", en: "Dimensions" },
              value: { es: "0.5m x 0.6m x 0.3m", en: "0.5m x 0.6m x 0.3m" },
            },
            {
              name: { es: "Descripción", en: "Description" },
              value: {
                es: "Molde para bloques",
                en: "Mold for blocks",
              },
            },
          ],
        },
        {
          id: "Hinge_0",
          name: {
            es: "Bisagra",
            en: "Hinge",
          },
          type: {
            es: "Refacción universal",
            en: "Universal spare part",
          },
          cardDescription: {
            line1: {
              es: "Nueva",
              en: "New",
            },
            line2: {
              es: "Acero inoxidable",
              en: "Spare part",
            },
          },
          principalImg: sparePart,
          imgs: [sparePart, sparePart, sparePart, sparePart],
          items: [
            {
              name: { es: "Condición", en: "Condition" },
              value: { es: "Nuevo", en: "New" },
            },
            {
              name: { es: "Marca", en: "Brand" },
              value: { es: "STIMB", en: "STIMB" },
            },
            {
              name: { es: "Modelo", en: "Model" },
              value: {
                es: "Columbia Machine 22 - 2003",
                en: "Columbia Machine 22 - 2003",
              },
            },
            {
              name: { es: "Dimensiones", en: "Dimensions" },
              value: { es: "10cm x 12xm x 5cm", en: "10cm x 12xm x 5cm" },
            },
            {
              name: { es: "Descripción", en: "Description" },
              value: {
                es: "Bisagra para máquinas",
                en: "Hinge for machines",
              },
            },
          ],
        },
        {
          id: "1x7_Mold_1",
          name: {
            es: "Molde 1x7",
            en: "1x7 Mold",
          },
          type: {
            es: "Molde para máquina automática",
            en: "Mold for automatic machine",
          },
          cardDescription: {
            line1: {
              es: "Nueva",
              en: "New",
            },
            line2: {
              es: "5 años de garantía",
              en: "5 year warranty",
            },
          },
          principalImg: mold,
          imgs: [mold, mold, mold, mold],
          items: [
            {
              name: { es: "Condición", en: "Condition" },
              value: { es: "Nuevo", en: "New" },
            },
            {
              name: { es: "Marca", en: "Brand" },
              value: { es: "STIMB", en: "STIMB" },
            },
            {
              name: { es: "Modelo", en: "Model" },
              value: {
                es: "Columbia Machine 22 - 2003",
                en: "Columbia Machine 22 - 2003",
              },
            },
            {
              name: { es: "Dimensiones", en: "Dimensions" },
              value: { es: "0.5m x 0.6m x 0.3m", en: "0.5m x 0.6m x 0.3m" },
            },
            {
              name: { es: "Descripción", en: "Description" },
              value: {
                es: "Molde para bloques",
                en: "Mold for blocks",
              },
            },
          ],
        },
        {
          id: "Hinge_1",
          name: {
            es: "Bisagra",
            en: "Hinge",
          },
          type: {
            es: "Refacción universal",
            en: "Universal spare part",
          },
          cardDescription: {
            line1: {
              es: "Nueva",
              en: "New",
            },
            line2: {
              es: "Acero inoxidable",
              en: "Spare part",
            },
          },
          principalImg: sparePart,
          imgs: [sparePart, sparePart, sparePart, sparePart],
          items: [
            {
              name: { es: "Condición", en: "Condition" },
              value: { es: "Nuevo", en: "New" },
            },
            {
              name: { es: "Marca", en: "Brand" },
              value: { es: "STIMB", en: "STIMB" },
            },
            {
              name: { es: "Modelo", en: "Model" },
              value: {
                es: "Columbia Machine 22 - 2003",
                en: "Columbia Machine 22 - 2003",
              },
            },
            {
              name: { es: "Dimensiones", en: "Dimensions" },
              value: { es: "10cm x 12xm x 5cm", en: "10cm x 12xm x 5cm" },
            },
            {
              name: { es: "Descripción", en: "Description" },
              value: {
                es: "Bisagra para máquinas",
                en: "Hinge for machines",
              },
            },
          ],
        },
        {
          id: "1x7_Mold_2",
          name: {
            es: "Molde 1x7",
            en: "1x7 Mold",
          },
          type: {
            es: "Molde para máquina automática",
            en: "Mold for automatic machine",
          },
          cardDescription: {
            line1: {
              es: "Nueva",
              en: "New",
            },
            line2: {
              es: "5 años de garantía",
              en: "5 year warranty",
            },
          },
          principalImg: mold,
          imgs: [mold, mold, mold, mold],
          items: [
            {
              name: { es: "Condición", en: "Condition" },
              value: { es: "Nuevo", en: "New" },
            },
            {
              name: { es: "Marca", en: "Brand" },
              value: { es: "STIMB", en: "STIMB" },
            },
            {
              name: { es: "Modelo", en: "Model" },
              value: {
                es: "Columbia Machine 22 - 2003",
                en: "Columbia Machine 22 - 2003",
              },
            },
            {
              name: { es: "Dimensiones", en: "Dimensions" },
              value: { es: "0.5m x 0.6m x 0.3m", en: "0.5m x 0.6m x 0.3m" },
            },
            {
              name: { es: "Descripción", en: "Description" },
              value: {
                es: "Molde para bloques",
                en: "Mold for blocks",
              },
            },
          ],
        },
        {
          id: "Hinge_2",
          name: {
            es: "Bisagra",
            en: "Hinge",
          },
          type: {
            es: "Refacción universal",
            en: "Universal spare part",
          },
          cardDescription: {
            line1: {
              es: "Nueva",
              en: "New",
            },
            line2: {
              es: "Acero inoxidable",
              en: "Spare part",
            },
          },
          principalImg: sparePart,
          imgs: [sparePart, sparePart, sparePart, sparePart],
          items: [
            {
              name: { es: "Condición", en: "Condition" },
              value: { es: "Nuevo", en: "New" },
            },
            {
              name: { es: "Marca", en: "Brand" },
              value: { es: "STIMB", en: "STIMB" },
            },
            {
              name: { es: "Modelo", en: "Model" },
              value: {
                es: "Columbia Machine 22 - 2003",
                en: "Columbia Machine 22 - 2003",
              },
            },
            {
              name: { es: "Dimensiones", en: "Dimensions" },
              value: { es: "10cm x 12xm x 5cm", en: "10cm x 12xm x 5cm" },
            },
            {
              name: { es: "Descripción", en: "Description" },
              value: {
                es: "Bisagra para máquinas",
                en: "Hinge for machines",
              },
            },
          ],
        },
      ],
    },
    {
      name: {
        es: "Mezclas",
        en: "Block material",
      },
      products: [
        {
          id: "5mm_granular_mix_0",
          name: {
            es: "Mezcla granular 5mm",
            en: "5mm granular mix",
          },
          type: {
            es: "Mezcla para bloques",
            en: "Block material",
          },
          cardDescription: {
            line1: {
              es: "Nuestra receta original",
              en: "Our original recipe",
            },
            line2: {
              es: "Recomendada para climas cálidos",
              en: "Recommended for hot climates",
            },
          },
          principalImg: block,
          imgs: [block, block, block, block],
          items: [
            {
              name: { es: "Marca", en: "Brand" },
              value: { es: "STIMB", en: "STIMB" },
            },
            {
              name: { es: "Contenido por costal", en: "Content per sack" },
              value: { es: "20kg", en: "20kg" },
            },
            {
              name: { es: "Descripción", en: "Description" },
              value: {
                es: "Mezcla granular 5mm. Recomendada para climas cálidos.",
                en: "Recomendada para climas cálidos. Recommended for hot climates.",
              },
            },
          ],
        },
        {
          id: "5mm_granular_mix_1",
          name: {
            es: "Mezcla granular 5mm",
            en: "5mm granular mix",
          },
          type: {
            es: "Mezcla para bloques",
            en: "Block material",
          },
          cardDescription: {
            line1: {
              es: "Nuestra receta original",
              en: "Our original recipe",
            },
            line2: {
              es: "Recomendada para climas cálidos",
              en: "Recommended for hot climates",
            },
          },
          principalImg: block,
          imgs: [block, block, block, block],
          items: [
            {
              name: { es: "Marca", en: "Brand" },
              value: { es: "STIMB", en: "STIMB" },
            },
            {
              name: { es: "Contenido por costal", en: "Content per sack" },
              value: { es: "20kg", en: "20kg" },
            },
            {
              name: { es: "Descripción", en: "Description" },
              value: {
                es: "Mezcla granular 5mm. Recomendada para climas cálidos.",
                en: "Recomendada para climas cálidos. Recommended for hot climates.",
              },
            },
          ],
        },
        {
          id: "5mm_granular_mix_2",
          name: {
            es: "Mezcla granular 5mm",
            en: "5mm granular mix",
          },
          type: {
            es: "Mezcla para bloques",
            en: "Block material",
          },
          cardDescription: {
            line1: {
              es: "Nuestra receta original",
              en: "Our original recipe",
            },
            line2: {
              es: "Recomendada para climas cálidos",
              en: "Recommended for hot climates",
            },
          },
          principalImg: block,
          imgs: [block, block, block, block],
          items: [
            {
              name: { es: "Marca", en: "Brand" },
              value: { es: "STIMB", en: "STIMB" },
            },
            {
              name: { es: "Contenido por costal", en: "Content per sack" },
              value: { es: "20kg", en: "20kg" },
            },
            {
              name: { es: "Descripción", en: "Description" },
              value: {
                es: "Mezcla granular 5mm. Recomendada para climas cálidos.",
                en: "Recomendada para climas cálidos. Recommended for hot climates.",
              },
            },
          ],
        },
      ],
    },
  ],
};

export default products;
