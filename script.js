class Cliente {
    constructor(idCliente, tipoCliente, dataCriacao, codBanco, agencia, conta, saldo, historico){
        this.idCliente      = idCliente;   
        this.tipoCliente    = tipoCliente;   
        this.dataCriacao    = dataCriacao;   
        this.idCliente      = idCliente;
        this.codBanco       = codBanco;
        this.agencia        = agencia;
        this.conta          = conta;
        this.saldo          = saldo;
        this.historico      = [];
    }
}

class Pessoa extends Cliente {
    constructor(idCliente, tipoCliente, dataCriacao, codBanco, agencia, conta, saldo, historico, nome, cpf, email, telefone, dataDeNascimento){
        
        super(idCliente, tipoCliente, dataCriacao, codBanco, agencia, conta, saldo, historico)
        
        this.nome               = nome;
        this.cpf                = cpf;
        this.email              = email;
        this.telefone           = telefone;
        this.dataDeNascimento   = dataDeNascimento;
    }       
}

class Empresa extends Cliente{
    constructor(idCliente, tipoCliente, dataCriacao, codBanco, agencia, conta, saldo, historico, nomeFantasia, cnpj, email, telefone, dataDaFundacao){
        
        super(idCliente, tipoCliente, dataCriacao, codBanco, agencia, conta, saldo, historico)

        this.nomeFantasia     = nomeFantasia;
        this.cnpj             = cnpj;
        this.email            = email;
        this.telefone         = telefone;
        this.dataDaFundacao   = dataDaFundacao;
    }
}

class Transacao{
    transfernecia(contaOrigem, contaDestino, idTransacao, dataDeTransacao, valorDaTransferencia){
/////////////////////////////////////////////////////////////////////// SUSPEITO DE ERRO
    //     this.contaOrigem    = contaOrigem;
    //     this.contaDestino   = contaDestino;

    //     if(this.contaOrigem.saldo >= valorDaTransferencia){
    //         this.contaOrigem.historico.push(
    //             {
    //                 idTransacao: idTransacao,
    //                 dataDeTransacao: dataDeTransacao,
    //                 valorDaTransferencia: valorDaTransferencia,
    //                 tipo: "pagamento",
    //             }
    //         )
    //         this.contaDestino.historico.push(
    //             {
    //                 idTransacao: idTransacao,
    //                 dataDeTransacao: dataDeTransacao,
    //                 valorDaTransferencia: valorDaTransferencia,
    //                 tipo: "recebimento",
    //             }
    //         )
    
    //     return {mensagem: "Transferência realizada com sucesso!"}
    //     }

    //     if(this.contaOrigem.saldo < valorDaTransferencia){
    //         return {mensagem: "Saldo insuficiente para transferência!"}
    //     }
    // }
///////////////////////////////////////////////////////////////////// SUSPEITO DE ERRO
}
    deposito(contaDestino, idDeposito, dataDoDeposito, valorDoDeposito){}
    pagamentoSalario(contaOrigem, contaDestino, idPagamento, dataDoPagamento, valorDoSalario){}

}
