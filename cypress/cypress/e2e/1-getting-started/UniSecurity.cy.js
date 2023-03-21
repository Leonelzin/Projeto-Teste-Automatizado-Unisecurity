///<reference types="cypress" />
describe("UniSecurity", () => {

it("Realizar Login no Sistema UniSecurity", () => {
    
     //Direcionar ao Sistema UniSecurity
        cy.visit("http://ftt.unievangelica.edu.br:8086/");
    
        //Inserir User
        cy.get("form.ng-untouched > :nth-child(1) > .form-control").type("EdnaldoPereira@gmail.com");
    
        //Inserir Senha
        cy.get(":nth-child(2) > .form-control").type("batatinhafrita123");
    
        //Realizar Login
        cy.get(".btn-primary").click();

        });

it("Realizar a Visualização de Histórico de Ocorrência", () => {

        //Selecionar Dashboard
        cy.get(".navbar-header.d-flex").click();
        cy.get(".ft-menu").click();

        //Visualizar Histórico de Ocorrência
        cy.get('[ng-reflect-parent="Ocorrências"] > .ng-star-inserted > .menu-title').click();
    
        //Visualizar Ocorrência Já Registrada Selecionada
        cy.get(":nth-child(1) > .card > .card-body").click();
    
        //Voltar para Histórico de Ocorrência
        cy.get(".btn").click();       
    
        });

it("Filtragem do Pesquisar e Ordenar Ocorrência", () => {

        //Realizar Filtragem de Pesquisa a Ocorrência
        cy.get(".form-control").type("Colisão");
    
        //Realizar Filtragem de Ordenar Ocorrência
        cy.get("#dropdownBasic1").click();
    
        //Realizar Filtragem de Ocorrências mais Recentes
        cy.get('.float-md-right > .dropdown > .dropdown-menu > :nth-child(2)').click();
    
        });

it("Realizar o Registro de dados da Ocorrência", () => {

        //Selecionar Registro de Ocorrência
        cy.get(".float-md-left > .btn").click();

        //Registro de Ocorrência
        cy.get(":nth-child(1) > field-validation > .form-group > .form-control").type("Ednaldo Pereira do Drip");
        cy.get(":nth-child(2) > field-validation > .form-group > .position-relative > .form-control").type("12/12/2012");
        cy.get(":nth-child(3) > field-validation > .form-group > .position-relative > .form-control").type("00:00");

        });

it("Realizar Novo Cadastro de Categoria de Ocorrência", () => {  
        
        //Novo Cadastro de Categoria de Ocorrência
        cy.get(".btn-group > .btn-raised").click();
        cy.get(".modal-body > .row > .col-12 > field-validation > .form-group > .form-control").type("Drift De Corsinh");
        cy.get(".modal-footer > .float-md-right > .d-flex > .btn-success").click();

        });

it("Realizar a Filtragem de Categória, Paginar, Edita-lá e Exclui-lá", () => {
    
        //Inserir Filtragem de Cadastro de Categoria
        cy.get(".btn-outline-info").click();
        cy.get(":nth-child(4) > .ng-star-inserted > :nth-child(2)").click();
        cy.get(".col-md-4 > .form-control").click();
    
        //Realizar a Filtragem de Categoria Desejada
        cy.get(".col-md-4 > .form-control").type("Drift de Corsinh");    
        cy.get(':nth-child(1) > .text-right > .info > .ft-edit-2').click();
    
        //Realizar Edição da Categoria Desejada
        cy.get(".modal-body > .row > .col-12 > field-validation > .form-group > .form-control").click();
        cy.get(".modal-body > .row > .col-12 > field-validation > .form-group > .form-control").type("aa");
        
        //Concluir Edição
        cy.get(".modal-footer > .float-md-right > .d-flex > .btn-success").click();
        cy.get(".col-md-4 > .form-control").click();
        
        //Excluir Categoria Desejada
        cy.get(':nth-child(1) > .text-right > .danger > .ft-trash-2').click();
        
        //Concluir Exclusão
        cy.get("delete-confirmation-dialog > .modal-footer > .float-md-right > .d-flex > .btn-raised").click();
        cy.get(".col-md-4 > .form-control").click();
        
        //Realizar Cadastro de Nova Categoria para a Conclusão do Registro de Categoria
        cy.get(".modal-footer > .float-md-right > .d-flex > .btn").click();
        cy.get(".ng-select-container").click();
        cy.get(".btn-group > .btn-raised").click();
        cy.get(".modal-body > .row > .col-12 > field-validation > .form-group > .form-control").click();
        cy.get(".modal-body > .row > .col-12 > field-validation > .form-group > .form-control").type("Drift de Corsinhaa");
        cy.get(".modal-footer > .float-md-right > .d-flex > .btn-success").click();
        
        }); 

it("Realizar o Registro de Ocorrência", () => {   
    
        //Registro de Local da Ocorrência
        cy.get(".col-md-4 > field-validation > .form-group > .position-relative > .form-control").type("Esquina do Bloco H - UNI");
        
        //Registro de Detalhamento da Ocorrência
        cy.get(".col-12 > field-validation > .form-group > .form-control").type("Em um fim de noite no turno noturno na Universidade Acadêmica UNIEVANGELICA, o segurança Ednaldozin Pereira avistou um indíviduo de mochila nas costas, radinho na cintura, bonezin pra trás e camiseta da supreme entrando no seu Corsinha anos 90 vermelho 89 cavalos. Então o cria acelerou de maneira imprudente a quase a velocidade da luz super sônica e metendo um drift MUCHO LOKO MANITO VRUM VRUM na esquininha do bloco H estilo Tokyo Drift velozes e furiosos 7, deu um salve pra favela e um cavalinho de pau.. isso é tudo. EDNALDO PEREIRA!.");
        
        //Confirmação do Registro da Ocorrência
        //cy.get('.btn-success').click();

        });

it("Visualização da Ocorrência Registrada", () => {
    
        //Selecionar categoria registrada para visualização
        cy.get(':nth-child(5) > .card > .card-body').click();

        });
});