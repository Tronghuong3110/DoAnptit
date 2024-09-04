package com.doantotnghiepptit.GiaoLuuCauLong.model.entity;

import jakarta.persistence.*;
import lombok.Data;

import java.time.LocalDateTime;

@Data
@Entity
@Table(name = "invoice_club")
public class InvoiceClub {
    @Id
    private Long id;
    private LocalDateTime date;
    private Double money;
    private Boolean status;

    @ManyToOne
    @JoinColumn(name = "member_id")
    private Member member;
}
