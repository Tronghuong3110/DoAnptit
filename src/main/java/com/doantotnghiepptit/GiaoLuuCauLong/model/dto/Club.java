package com.doantotnghiepptit.GiaoLuuCauLong.model.dto;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;

import java.time.LocalDateTime;

@Data

public class Club {
    private Long id;
    private String numberNumber;
    private String name;
    private LocalDateTime createAt;
    private String description;
    private String incorporation;
}
