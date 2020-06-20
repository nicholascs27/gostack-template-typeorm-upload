import { getCustomRepository, TransactionRepository } from 'typeorm';
import AppError from '../errors/AppError';

import Transaction from '../models/Transaction';
import Transactionsrepository from '../repositories/TransactionsRepository';

class DeleteTransactionService {
  public async execute(id: string): Promise<void> {
    const trasactiosnRepository = getCustomRepository(Transactionsrepository);

    const transaction = await trasactiosnRepository.findOne(id);

    if (!transaction) {
      throw new AppError('Transaction does not exist');
    }

    await trasactiosnRepository.remove(transaction);
  }
}

export default DeleteTransactionService;
