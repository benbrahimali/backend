import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { APP_GUARD } from '@nestjs/core';
import { AtGuard } from './common/guards';
import { ConfigModule } from '@nestjs/config';
import { MailerModule } from './mailer/mailer.module';
import { StadiumService } from './studium/stadium.service';
import { StudiumController } from './studium/studium.controller';
import { StadiumModule } from './studium/studium.module';
import { TeamService } from './team/team.service';
import { TeamController } from './team/team.controller';
import { TeamModule } from './team/team.module';
import { MatchModule } from './match/match.module';
import { ChallengeController } from './challenge/challenge.controller';
import { ChallengeModule } from './challenge/challenge.module';
import { NotificationService } from './notification/notification.service';
import { NotificationController } from './notification/notification.controller';
import { NotificationModule } from './notification/notification.module';
import { ReservationModule } from './resrvation/resrvation.module';
import { PaymentController } from './payement/payement.controller';
import { PaymentService } from './payement/payment.service';
import { PaymentModule } from './payement/payment.module';
import { ChallengeService } from './challenge/challenge.service';

@Module({
  imports: [
    UserModule,
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.MONGO_URI),
    AuthModule,
    MailerModule,
    StadiumModule,
    TeamModule,
    MatchModule,
    ChallengeModule,
    NotificationModule,
    ReservationModule,
    PaymentModule,
  ],
  providers: [
    {
      provide: APP_GUARD,
      useClass: AtGuard,
    },
    StadiumService,
    TeamService,
    NotificationService,
    PaymentService,
    ChallengeService
  ],
  controllers: [StudiumController, TeamController, ChallengeController, NotificationController, PaymentController],
})
export class AppModule {}
