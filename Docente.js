import User from "./User.js";

export default class Docente extends User {
  constructor(nome, email, nascimento, role = "Professor", ativo = true) {
    super(nome, email, nascimento, role, ativo);
  }
  aprovaEstudante(estudante, curso) {
    return `${estudante} foi aprovado no curso ${curso}`;
  }
}
