package com.doantotnghiepptit.GiaoLuuCauLong.model.dto;

import jakarta.persistence.*;
import lombok.Data;

import java.time.LocalDateTime;

@Data

public class InvoiceClub {
    private Long id;
    private LocalDateTime date;
    private Double money;
    private Boolean status;

}
