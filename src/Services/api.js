// api.js
const baseURL = 'https://visiechallenge-b51dd6dl.b4a.run/api/pessoas';

const fetchAPI = async () => {
  try {
    const response = await fetch(`${baseURL}`);
    if (!response.ok) {
      throw new Error('Erro ao buscar os dados da API.');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Erro ao obter dados da API:', error);
    return null;
  }
};

export { fetchAPI };




 export const deleteData = async (url, id) => {
    try {
      const response = await fetch(`${url}/${id}`, {
        method: 'DELETE',
      });
      if (!response.ok) {
        throw new Error('Erro ao excluir os dados da API');
      }
      return response.json();
    } catch (error) {
      throw new Error('Erro ao excluir os dados da API');
    }
  };


export const pessoasData  = [
    {
      id_pessoa: 1,
      nome: "Alberto Vieira",
      rg: "25.507.105-2",
      cpf: "168.637.122-53",
      data_nascimento: "1997-07-01",
      data_admissao: "2020-09-28",
      funcao: "Boxeador",
    },
    {
      id_pessoa: 2,
      nome: "Alexandre Teixeira",
      rg: "79.474.888-8",
      cpf: "877.733.889-89",
      data_nascimento: "1982-08-16",
      data_admissao: "2020-05-15",
      funcao: null,
    },
    {
      id_pessoa: 3,
      nome: "Ana Carolina Souza",
      rg: "52.565.667-8",
      cpf: "766.370.920-96",
      data_nascimento: "1982-03-19",
      data_admissao: "2016-08-19",
      funcao: null,
    },
    {
      id_pessoa: 4,
      nome: "Ana Paula Soares",
      rg: "54.744.331-9",
      cpf: "746.917.734-52",
      data_nascimento: "1984-09-01",
      data_admissao: "2019-08-25",
      funcao: null,
    },
    {
      id_pessoa: 5,
      nome: "Antônio Siqueira",
      rg: "81.669.888-5",
      cpf: "695.991.412-45",
      data_nascimento: "1990-07-26",
      data_admissao: "2016-05-18",
      funcao: null,
    },
    {
      id_pessoa: 6,
      nome: "Arthur Silva",
      rg: "43.204.402-9",
      cpf: "345.898.157-88",
      data_nascimento: "1996-12-30",
      data_admissao: "2016-04-28",
      funcao: null,
    },
    {
      id_pessoa: 7,
      nome: "Bárbara Santos",
      rg: "57.106.623-3",
      cpf: "587.914.225-66",
      data_nascimento: "2000-09-04",
      data_admissao: "2018-11-17",
      funcao: null,
    },
    {
      id_pessoa: 8,
      nome: "Beatriz Santana",
      rg: "70.855.305-2",
      cpf: "093.084.203-04",
      data_nascimento: "1994-05-17",
      data_admissao: "2018-03-05",
      funcao: null,
    },
    {
      id_pessoa: 9,
      nome: "Caio Sampaio",
      rg: "14.475.327-9",
      cpf: "483.764.953-05",
      data_nascimento: "1995-11-18",
      data_admissao: "2020-06-03",
      funcao: null,
    },
    {
      id_pessoa: 10,
      nome: "Carla Rodrigues",
      rg: "62.692.082-5",
      cpf: "566.412.961-13",
      data_nascimento: "1996-08-04",
      data_admissao: "2015-03-31",
      funcao: null,
    },
    {
      id_pessoa: 11,
      nome: "Carlos Rocha",
      rg: "23.782.125-5",
      cpf: "053.166.034-60",
      data_nascimento: "1983-07-07",
      data_admissao: "2017-03-08",
      funcao: null,
    },
    {
      id_pessoa: 12,
      nome: "Cauê Ribeiro",
      rg: "33.548.790-1",
      cpf: "491.145.149-15",
      data_nascimento: "1981-01-27",
      data_admissao: "2020-12-31",
      funcao: null,
    },
    {
      id_pessoa: 13,
      nome: "Cláudia Reis",
      rg: "54.435.082-9",
      cpf: "511.020.782-80",
      data_nascimento: "1986-08-04",
      data_admissao: "2020-09-25",
      funcao: null,
    },
    {
      id_pessoa: 14,
      nome: "Cláudio Ramos",
      rg: "41.432.308-6",
      cpf: "673.452.026-90",
      data_nascimento: "1982-08-12",
      data_admissao: "2019-11-01",
      funcao: null,
    },
    {
      id_pessoa: 15,
      nome: "Daiane Pereira",
      rg: "90.815.741-8",
      cpf: "704.352.424-58",
      data_nascimento: "2002-11-22",
      data_admissao: "2017-06-15",
      funcao: null,
    },
    {
      id_pessoa: 16,
      nome: "Diego Penha",
      rg: "43.099.953-1",
      cpf: "329.630.074-00",
      data_nascimento: "1983-02-23",
      data_admissao: "2017-12-01",
      funcao: null,
    },
    {
      id_pessoa: 17,
      nome: "Eduardo Oliveira",
      rg: "46.249.609-1",
      cpf: "772.220.114-80",
      data_nascimento: "2001-02-12",
      data_admissao: "2020-05-10",
      funcao: null,
    },
    {
      id_pessoa: 18,
      nome: "Eliana Nunes",
      rg: "84.269.396-7",
      cpf: "130.491.959-59",
      data_nascimento: "1994-07-03",
      data_admissao: "2018-01-16",
      funcao: null,
    },
  ]; 