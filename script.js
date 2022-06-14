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
    static transfernecia(contaOrigem, contaDestino, idTransacao, dataDeTransacao, valorDaTransferencia){

        if(contaOrigem.saldo >= valorDaTransferencia){
            contaOrigem.historico.push(
                {
                    idTransacao: idTransacao,
                    dataDeTransacao: dataDeTransacao,
                    valorDaTransferencia: valorDaTransferencia,
                    tipo: "pagamento",
                }
            )
            contaDestino.historico.push(
                {
                    idTransacao: idTransacao,
                    dataDeTransacao: dataDeTransacao,
                    valorDaTransferencia: valorDaTransferencia,
                    tipo: "recebimento",
                }
            )
    
        return {mensagem: "Transferência realizada com sucesso!"}
        }

        if(contaOrigem.saldo < valorDaTransferencia){
            return {mensagem: "Saldo insuficiente para transferência!"}
        }
    }

    static deposito(contaDestino, idDeposito, dataDoDeposito, valorDoDeposito){
        this.idDeposito         = idDeposito;
        this.dataDoDeposito     = dataDoDeposito;
        this.valorDoDeposito    = valorDoDeposito;
        
        contaDestino.historico.push(
            {
                idDeposito: idDeposito,
                dataDoDeposito: dataDoDeposito,
                valorDoDeposito: valorDoDeposito,
                tipo: "recebimento",
              }
        );
        return {mensagem: "Depósito realizado com sucesso!"}
    }

    static pagamentoSalario(contaOrigem, contaDestino, idPagamento, dataDoPagamento, valorDoSalario){
        this.contaOrigem        = contaOrigem;
        this.contaDestino       = contaDestino;
        this.idPagamento        = idPagamento;
        this.dataDoPagamento    = dataDoPagamento;
        this.valorDoSalario     = valorDoSalario;

        if(Empresa.includes(contaOrigem) && Pessoa.valorDoSalario>=1000){
            return {mensagem: "Seu limite máximo para este tipo de operação é de 1000, entre em contato com o banco!"} 
        }

        if(Empresa.contaOrigem >= Pessoa.valoDoSalario){
            Pessoa.contaDestino.saldo += Pessoa.valoDoSalario;
            Empresa.contaOrigem.saldo -= Pessoa.valoDoSalario;
            Pessoa.contaDestino.historico.push(
                {
                    idPagamento: idPagamento,
                    dataDoPagamento: dataDoPagamento,
                    valorDoSalario: valorDoSalario,
                    tipo: "recebimento",
                }
            )
            Empresa.contaOrigem.historico.push(
                {
                    idPagamento: idPagamento,
                    dataDoPagamento: dataDoPagamento,
                    valorDoSalario: valorDoSalario,
                    tipo: "recebimento",
                }
            )
            return {mensagem: "Pagamento realizado com sucesso!"}
        }else return {mensagem: "Saldo insuficiente para realizar o pagamento!"}
    }
}
